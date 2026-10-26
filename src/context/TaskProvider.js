import { v4 as uuidv4 } from "uuid";
import TaskContext from "./TaskContext";
import { useState, useEffect, useMemo, useCallback, useReducer } from "react";
import tasksReducer from "../reducers/taskReducer";

const STORAGE_KEY = "tasks";
// المهام الافتراضية التي تظهر عند تشغيل التطبيق لأول مرة
const initialTasks = [
  {
    id: uuidv4(),
    title: "إنهاء مشروع التخرج",
    details:
      "مراجعة الكود، التأكد من عمل جميع الخصائص، وتسليم المشروع قبل الموعد النهائي.",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "شراء احتياجات البقالة",
    details: "شراء الحليب والخبز والبيض وبعض الاحتياجات المنزلية.",
    completed: true,
  },
];
// تحميل المهام المحفوظة، أو إرجاع المهام الافتراضية عند عدم وجود بيانات
const loadTasks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialTasks;

    const parsed = JSON.parse(saved);
    // التأكد من أن البيانات المحفوظة عبارة عن مصفوفة
    return Array.isArray(parsed) ? parsed : initialTasks;
  } catch (error) {
    return initialTasks;
  }
};

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [], loadTasks);
  const [currentFilter, setCurrentFilter] = useState("all");
  // حفظ المهام في Local Storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("فشل حفظ المهام", error);
    }
  }, [tasks]);
  // دالة عامة لجميع العمليات
  const dispatchAction = useCallback((type, payload) => {
    dispatch({ type, ...payload });
  }, []);
  // تصفية المهام بناءً على الفلتر المحدد
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (currentFilter === "completed") return task.completed;
      if (currentFilter === "uncompleted") return !task.completed;
      return true;
    });
  }, [tasks, currentFilter]);

  // تجميع القيمة لمنع إعادة رندر المكونات الأبناء عبثاً
  const providerValue = useMemo(() => {
    return {
      tasks,
      currentFilter,
      setCurrentFilter,
      filteredTasks,
      dispatchAction,
    };
  }, [tasks, currentFilter, filteredTasks, dispatchAction]);

  return (
    <TaskContext.Provider value={providerValue}>
      {children}
    </TaskContext.Provider>
  );
}

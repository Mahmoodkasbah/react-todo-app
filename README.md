# تطبيق قائمة المهام (To-Do List)

تطبيق لإدارة المهام اليومية مبني بـ React و Material UI، بواجهة عربية كاملة (RTL).

## المميزات

- إضافة مهمة جديدة بعنوان وتفاصيل 
- تعديل المهمة وحذفها مع نافذة تأكيد
- تحديد المهمة كمنجزة أو إلغاء الإنجاز
- فلترة المهام: الكل / المنجزة / غير المنجزة، مع عدّاد لكل فلتر
- حفظ المهام تلقائيًا في `localStorage`
- رسائل تنبيه (Snackbar) بعد كل عملية
- تصميم متجاوب مع الجوال

## التقنيات المستخدمة

- React
- Material UI (MUI)
- Context API + `useReducer` لإدارة الحالة
- uuid لتوليد معرفات المهام

## طريقة التشغيل

```bash
# تثبيت الحزم
npm install

# تشغيل المشروع
npm start
```

ثم افتح [http://localhost:3000](http://localhost:3000).

```bash
# تشغيل الاختبارات
npm test

# بناء نسخة الإنتاج
npm run build
```

## هيكل المشروع

```
src/
├── components/
│   ├── dialogs/      # نوافذ التعديل والحذف
│   ├── layout/       # الترويسة
│   └── tasks/        # النموذج والفلاتر والقائمة والبطاقة
├── context/          # TaskContext و TaskProvider
├── reducers/         # taskReducer
├── theme/            # إعدادات ثيم MUI
├── App.js
└── index.js
```

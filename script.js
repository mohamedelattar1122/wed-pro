document.addEventListener("DOMContentLoaded", function () {
    // عرض قسم Home عند تحميل الصفحة لأول مرة
    showSection("home");

    // تمييز الزر النشط تلقائيًا (Home)
    var homeLink = document.getElementById('homeLink');
    homeLink.classList.add('active');
});

function showSection(sectionId) {
    // إخفاء جميع الأقسام
    var sections = document.querySelectorAll('.section-content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // إظهار القسم المطلوب
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';

    // إزالة التنسيق عن جميع الأزرار
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // تمييز الزر النشط
    var activeLink = document.getElementById(sectionId + 'Link');
    activeLink.classList.add('active');
}
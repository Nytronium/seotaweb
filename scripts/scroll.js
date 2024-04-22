const observer = new IntersectionObserver (function(entries) {
    entries.forEach(function(section){
        if (section.isIntersecting){
            section.target.className = 'active';
        }
    });
},{threshold: .99} );

document.querySelectorAll('section').forEach(section =>{
    observer.observe(section);
});
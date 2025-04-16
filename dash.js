const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('visible');
  sidebar.classList.remove('hidden');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('visible');
  sidebar.classList.add('hidden');
});

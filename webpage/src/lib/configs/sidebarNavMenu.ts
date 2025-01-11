import type { SidebarNavMenu } from "$lib/types";

// List of sidebar menu items to be displayed in the sidebar
export const sidebarMenuList: SidebarNavMenu = [
    { title: 'Home', icon: 'fa-solid fa-home', link: '/' },
    { title: 'Games', icon: 'fa-solid fa-chess-knight', link: '/libary/games' },
    { title: 'Leaderboard', icon: 'fa-solid fa-crown', link: '/leaderboard', notification: 5 },
    { title: 'Documentation', icon: 'fa-solid fa-book', link: '/documentation' },
    { title: 'Changelogs', icon: 'fa-solid fa-clock-rotate-left', link: '/libary/changelogs', notification: 12 },
    { title: 'Profile', icon: 'fa-solid fa-user', link: '/profile' },
    { title: 'Settings', icon: 'fa-solid fa-gear', link: '/settings' },
    { title: 'Support', icon: 'fa-solid fa-headset', link: '/support', notification: 2 },
];

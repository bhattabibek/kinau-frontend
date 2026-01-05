export default function Navbar() {
return (
<header className="bg-white shadow px-6 py-4 flex justify-between items-center">
<h1 className="text-xl font-semibold">Dashboard</h1>
<div className="flex items-center gap-3">
<span className="text-gray-600">Admin</span>
<img
src="https://i.pravatar.cc/40"
className="w-9 h-9 rounded-full"
/>
</div>
</header>
);
}
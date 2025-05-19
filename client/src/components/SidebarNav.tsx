import { Badge } from "@/components/ui/badge";

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

interface SidebarNavProps {
  navItems: NavItem[];
  currentViewPath: string;
  onNavigate: (path: any) => void;
}

export default function SidebarNav({ navItems, currentViewPath, onNavigate }: SidebarNavProps) {
  const getIconClass = (iconName: string) => {
    return `fas fa-${iconName}`;
  };

  return (
    <nav className="flex-1 p-4 space-y-1">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => onNavigate(item.path)}
          className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md ${
            currentViewPath === item.path
              ? "bg-blue-50 text-blue-700"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          <span className="mr-2 w-5 text-center">
            <i className={getIconClass(item.icon)}></i>
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
}

export function Tabs({ children }) { return <div>{children}</div>; }
export function TabsList({ children }) { return <div className="flex">{children}</div>; }
export function TabsTrigger({ children, onClick }) { return <button onClick={onClick} className="px-4 py-2 border">{children}</button>; }
export function TabsContent({ children }) { return <div>{children}</div>; }
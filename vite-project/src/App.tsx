import { LayoutGrid, ListIcon, LucideIcon, Trash2 } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"


type ViewType = "grid" | "list"

const listItem: {
  name: ViewType;
  icon: LucideIcon;
}[] = [{
  name: "grid",
  icon: LayoutGrid
},
{
  name: "list",
  icon: ListIcon
}]

const Grid = () => {
  return (
    <motion.div layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <motion.div layoutId={`grid-items-${index}`} className=" bg-slate-300 rounded-md p-4" key={index}>
              <div className="flex justify-between items-center mb-4">
                {/* user profile */}
                <div className="flex items-center gap-2">
                  <motion.div layoutId="avatar" className="rounded-full bg-slate-600 p-5" />
                  <div className="">
                    <motion.p layoutId="name" className="font-semibold">John Doe</motion.p>
                    <motion.span layoutId="email"
                      className="text-slate-600">john@doe.com</motion.span>
                  </div>
                </div>

                {/* Trash */}
                <motion.div layoutId="delete" className="flex items-center border-2 cursor-pointer border-slate-600 p-2 rounded-full">
                  <Trash2 className="w-4 h-4" />
                </motion.div>
              </div>
              {/* Bars */}
              <motion.div layoutId="bar-component" className="flex flex-col gap-2">
                <motion.div layoutId="bar-one" className="bg-slate-600 p-1 w-full h-2 rounded-md" />
                <motion.div layoutId="bar-two" className="bg-slate-600 p-1 w-1/2 h-2 rounded-md" />
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

const List = () => {
  return (
    <motion.div layout className="grid grid-cols-1 gap-5">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <motion.div layoutId={`list-items-${index}`} className=" bg-slate-300 rounded-md p-4" key={index}>
            <div className="flex justify-between items-center gap-4">
              {/* user profile */}
              <div className="flex items-center gap-2">
                <motion.div layoutId="list-profile" className="rounded-full bg-slate-600 p-5" />
                <div className="">
                  <motion.p layoutId="list-name" className="font-semibold">John Doe</motion.p>
                  <motion.span layoutId="list-email" className="text-slate-600">john@doe.com</motion.span>
                </div>
              </div>
              {/* bars */}
              <motion.div layoutId="list-bar" className="flex flex-col w-full gap-2">
                <motion.div layoutId="list-bar-1" className="bg-slate-600 p-1 w-full rounded-md" />
                <motion.div layoutId="list-bar-1" className="bg-slate-600 p-1 w-1/2 rounded-md" />
              </motion.div>
              {/* trash */}
              <div className="flex items-center border-2 cursor-pointer border-slate-600 p-2 rounded-full">
                <Trash2 className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

type HeaderProps = {
  view: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Header = ({ view, onViewChange }: HeaderProps) => {
  return (
    <div className="w-full flex justify-between items-center mb-6 pb-6 border-b border-slate-400 ">
      <h1 className="text-2xl font-semibold">Grid to List</h1>
      <motion.div
        layout
        className="flex items-center gap-2 bg-slate-300 p-1 rounded-md ">
        {listItem.map((item) => (
          <button
            key={item.name}
            className={`cursor-pointer p-2 rounded-md ${view === item.name ? "bg-slate-600" : " "
              }`}
            onClick={() => onViewChange(item.name)}
          >
            <item.icon className={`w-5 h-5 ${view !== item.name ? "text-black" : ""} text-white/90`} />
          </button>
        ))}
         <motion.div
          layoutId="grid-line"
          className="size-10 bg-background absolute rounded-md"
          animate={{
            x: view === "grid" ? 0 : 56,
            transition: {
              duration: 1.5,
            },
          }}
        />
      </motion.div>
    </div>
  )
}

function App() {
  const [view, setView] = useState<ViewType>("grid")

  const handleViewChange = (view: ViewType) => {
    setView(view)
  }

  return (
    <>
      <div className='mx-auto max-w-5xl bg-slate-100 border-x p-20 w-full min-h-screen'>
        <Header view={view} onViewChange={handleViewChange} />
        <AnimatePresence initial={false} mode="popLayout">
          {
            view === "grid" ? (
              <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 20 }}
              exit={{ opacity: 0, x: 0, y: 20 }}
              layoutId="gridView"
              transition={{
                
                duration: 2,
              }}
              >
                <Grid />
              </motion.div>) : (
              <motion.div
              key="list"
              initial={{ opacity: 0, y: 20, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 20 }}
              exit={{ opacity: 0, y: 20, x: 0 }}
              layoutId="listView"
              transition={{ type: "spring", duration: 2 }}
              >
                <List />
              </motion.div>)}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App

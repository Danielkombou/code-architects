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
            <motion.div layoutId={`items-${index}`} className="flex gap-4 flex-col bg-slate-300 rounded-md p-4" key={index}>
              <div className="flex items-center justify-between">
                <ProfileSection index={index} />
                <div className="cursor-pointer rounded-full bg-slate-300 border-slate-600 border-2 p-2">
                  <Trash2 className="w-5 h-5 " />
                </div>
              </div>
              <BarsSection index={index} />
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
          <motion.div layoutId={`items-${index}`} className="flex items-center gap-4 bg-slate-300 rounded-md p-4" key={index}>
            <ProfileSection index={index} />
            <BarsSection index={index} className="w-full" />
            <div className="rounded-full bg-slate-300 border-slate-600 border-2 p-2">
              <Trash2 className="w-5 h-5 " />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}


const ProfileSection = ({ index }: { index: number }) => (
  <div className="flex items-center gap-2">
    {/* <div className="flex items-center gap-2"> */}
    <motion.div
      layoutId={`avatar-${index}`}
      className="rounded-full bg-slate-600 p-5"
    />
    <div>
      <motion.p layoutId={`name-${index}`} className="font-semibold">
        John Doe
      </motion.p>
      <motion.span layoutId={`email-${index}`} className="text-slate-600">
        john@doe.com
      </motion.span>
    </div>
    {/* </div> */}

  </div>
);

const BarsSection = ({ index, className = "" }: { index: number; className?: string }) => (
  <motion.div layout className={`flex flex-col gap-2 ${className}`}>
    <motion.div
      layoutId={`bar-${index}`}
      className="bg-slate-600 p-1 w-full rounded-md"
    />
    <motion.div
      layoutId={`bar-small-${index}`}
      className="bg-slate-600 p-1 w-1/2 rounded-md"
    />
  </motion.div>
);

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
        className="relative flex items-center gap-2 bg-slate-300 p-1 rounded-md ">
        {listItem.map((item) => (
          <button
            key={item.name}
            className={`relative z-10 transition-all duration-300 cursor-pointer px-3 py-2.5 rounded-md ${view === item.name ? "text-white" : "text-black"
              }`}
            onClick={() => onViewChange(item.name)}
          >
            <item.icon className={`w-5 h-5 ${view !== item.name ? "text-black" : ""} text-white/90`} />
          </button>
        ))}
        <motion.div
          layoutId="grid-line"
          className="absolute top-1 left-1 size-10 bg-slate-600 rounded-md"
          animate={{
            x: view === "grid" ? 0 : 56,
            transition: {
              damping: 30,
              stiffness: 150,
              type: "spring",
              duration: 0.2,
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
        <AnimatePresence initial={false} mode="wait">
          {
            view === "grid" ? (
              <motion.div
                key="grid"
                // initial={{ opacity: 0, y: 0, x: 0 }}
                // animate={{ opacity: 1, y: 10, x: 0 }}
                // exit={{ opacity: 0, x: 0, y: 0, }}
                layoutId="gridView"
                transition={{

                  duration: 0.2,
                }}
              >
                <Grid />
              </motion.div>) : (
              <motion.div
                key="list"
                // initial={{ opacity: 0, y: 40, x: 0 }}
                // animate={{ opacity: 1, y: 0, x: 20 }}
                // exit={{ opacity: 0, y: 40, x: 0 }}
                layoutId="gridView"
                transition={{ type: "spring", duration: 0.2 }}
              >
                <List />
              </motion.div>)}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App

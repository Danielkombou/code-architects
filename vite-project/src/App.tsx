// import { LayoutGrid, ListIcon, LucideIcon, } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Grid, { Header, List, ViewType } from "./gridTolist"




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

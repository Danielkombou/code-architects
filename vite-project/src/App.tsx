import { LayoutGrid, ListIcon, Trash2 } from "lucide-react"
import { motion } from "motion/react"
import { hr } from "motion/react-client"



const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <div className=" bg-slate-300 rounded-md p-4" key={index}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-slate-600 p-5" />
                <div className="">
                  <p className="font-semibold">John Doe</p>
                  <span className="text-slate-600">john@doe.com</span>
                </div>
              </div>
              <div className="flex items-center border-2 border-slate-600 p-2 rounded-full">
                <Trash2 className="w-4 h-4" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-slate-600 p-1 w-full rounded-md" />
              <div className="bg-slate-600 p-1 w-1/2 rounded-md" />
            </div>


          </div>
        )
      })}
    </div>
  )
}

const List = () => {
  return (
    <div></div>
  )
}


function App() {


  return (
    <>
      <div className='mx-auto max-w-5xl bg-slate-100 border-x p-20 w-full min-h-screen'>
        <div className="w-full flex justify-between items-center mb-6 pb-6 border-b border-slate-400 ">
          <h1 className="text-2xl font-semibold">Grid to List</h1>
          <div className="flex items-center gap-2 bg-neutral-300 p-1 rounded-md ">
            <div className="bg-neutral-500 p-2 rounded-md">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div className={`p-2 rounded-md `}>
              <ListIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <Grid />
      </div>
    </>
  )
}

export default App

import { Trash, Trash2 } from "lucide-react"
import { motion } from "motion/react"

function App() {
  
  return (
    <>
      <div className='mx-auto max-w-5xl bg-slate-100 border-x p-20 w-full min-h-screen text-4xl'>
        {Array.from({ length: 10}).map((_, index) => {
          // some js
          return (
            <div key={index}>
              <div>
                <div>

                </div>
              <Trash2 />

              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

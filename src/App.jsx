import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import Meal from './components/Meal';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  const [count, setCount] = useState(0)
  const goTop = () => scrollTo("0","0");

  return (
    <div className="App">
      {/* <div className='p-[70px]  flex md:flex-col  sm:flex-col bg-slate-400 gap-[5rem] justify-start '>
        <div className='w-[200px]'>
        <img src="  https://tse4.mm.bing.net/th?id=OIP.19M5fuIKcWsFBNQqi98XowHaJ4&pid=Api&P=0" alt="" />
        </div>
        <div>
        <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste cum suscipit culpa consequuntur veritatis quasi architecto eum! Sequi ut debitis autem, cum harum accusamus consectetur corporis nihil odit est doloremque.
     Dignissimos libero quae qui molestias dolorum. Quaerat accusantium tempora ab cupiditate impedit autem deserunt qui. Officiis, obcaecati officia laboriosam, culpa ex inventore magni asperiores porro quidem, sapiente totam temporibus esse!
     Sint praesentium architecto doloribus doloremque error culpa, obcaecati incidunt. Ratione laudantium, id repellendus sint, nobis iusto quod dolore cumque corporis rem molestiae deserunt veritatis, modi porro similique eligendi debitis quae.
     Odio cupiditate enim illum aspernatur accusamus unde minus dolores reiciendis necessitatibus incidunt, molestiae doloremque. Nihil, incidunt iusto obcaecati nam quo eligendi minus id magni nemo. Sed impedit voluptate suscipit ea.
     Ex odit soluta quisquam quasi fuga dolore consectetur repellat voluptates alias maxime. Dolor quas magni sed tenetur laborum voluptates voluptatum aspernatur. Ut mollitia doloremque amet distinctio. Veniam delectus recusandae tenetur!
     Excepturi, ab neque fugit, laudantium expedita cumque, quisquam dolores voluptatem aliquam hic sapiente dolorum. Id quae distinctio dignissimos incidunt tempora iste veniam, est voluptas vero nostrum dolorem sint consequuntur quod?
     Aspernatur, excepturi, possimus hic laborum aperiam praesentium, dicta animi eum cumque iste quo qui iure. Praesentium reiciendis, cum optio, assumenda voluptates iure illo nostrum quia quisquam labore corrupti autem et!
     Velit ex reprehenderit explicabo eveniet voluptatibus enim error obcaecati maiores nemo, sequi dolorem adipisci cumque voluptatum inventore fugiat quas, laudantium aspernatur, perferendis iste ipsam modi! Possimus qui ut sit at!
     Laboriosam dicta commodi modi tempora aliquid iste quam dignissimos eaque eos, perferendis incidunt atque sed delectus eius. Doloribus mollitia qui dolores, ducimus tenetur, dolorum eos debitis minima numquam repellendus reprehenderit.
     Eaque beatae saepe expedita? Quaerat vitae molestiae dolorem qui, eveniet voluptatum, doloribus cumque illo architecto sunt eum recusandae maxime sit odit corporis dolores. Dicta cum vitae distinctio quo quidem facere.</p>
        </div>
      </div>    
      <div className='m-10'>
      <div className=' p-[50px] w-[400px] shadow-md shadow-gray-600 bg-slate-400'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.19M5fuIKcWsFBNQqi98XowHaJ4&pid=Api&P=0" alt="" />
        <h1 className='mt-4 text-white'>She is so beautiful</h1>
      </div> 
      </div>
      <div className='container bg-slate-400 mx-auto'>
        <h1>hello</h1>
      </div>
      <div className='relative'>
        <div className='container h-screen bg-slate-200 mx-auto'></div>
        <div className='container h-screen bg-slate-400 mx-auto'></div>
        <div className='container h-screen bg-slate-600 mx-auto'></div>
        <button onClick={goTop} className='bg-slate-900 p-[5px]  text-white fixed bottom-10 left-10'>Top</button>
      </div>
      <div className='flex  justify-between'>
        <div className='bg-slate-200 w-10 h-10'>1</div>
        <div className='bg-slate-400 w-24 h-24'>2</div>
        <div className='bg-slate-600 w-44 h-44'>3</div>

      </div> */}

    <Navbar  />
    <Routes>
      <Route path='/' element={<Meal/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/search/:name' element={<Search/>} />
    </Routes>
    </div>
  )
}

export default App

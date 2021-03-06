import Head from 'next/head'
import Reactweb from '/components/reactweb'
import Navbar from '/components/navbar'
import Useful from '../components/useful'
import Setting from '../components/setting'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGripLines, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>React starter</title>
        <link rel="icon" href="./nodeicon.png" />
        <script src="https://kit.fontawesome.com/44113b40f2.js" crossorigin="anonymous"></script>
      </Head>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center "
      >
        <img className="m-20 animate-spin-slow" src="nodeicon.png" width="400px" />
        <h1 className="text-6xl font-bold " style={{ minHeight: '100%' }}>
          What is {' '}
          <a className="text-cyan-400 animate-pulse" href="#">
            React ?
          </a>
        </h1>
        <div className="grid grid-cols-5 m-16 text-2xl text-center">
          <div></div>
          <div className="col-span-3">
            <b className="text-cyan-500">React</b> เป็น JavaScript Libraly Free and Open-Source สำหรับสร้าง User Interface (UI) พัฒนาโดย Facebook เปิดตัวครั้งแรกในปี 2013
            โดยลักษณะที่เห็นได้ชัด{"\t"} คือการออกแบบโครงสร้างแบบออกเป็นส่วนย่อยๆ หรือ Component{' '}
          </div>
          <div></div>
        </div>
        <a href="#start">
        <button className="px-8 py-3 text-2xl font-bold bg-transparent border rounded-full hover:bg-cyan-500 text-cyan-500 hover:text-white my-7 border-cyan-500 hover:border-transparent">
          Let's Start
        </button>
        </a>
                <div id='start' className="px-3 py-4 mt-20 text-5xl border-b shadow-lg text-cyan-400 rounded-2xl">
                ทำไมต้อง React
                </div>
        <Useful />
        <div className="px-3 py-4 mt-20 text-5xl border-b shadow-lg text-cyan-400 rounded-2xl">
                Website ที่พัฒนาด้วย Reactjs
                </div>

        <Reactweb />
        <div className="px-3 py-4 mt-20 text-4xl border-b shadow-lg text-cyan-400 rounded-2xl">
                เริ่มต้นการการใช้งาน React
                </div>
        <Setting />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <h2>จัดทำโดย นาย นนทพัทธ์ เทศปัญ 63070228 ในรายวิชา Webtechnology</h2>
      </footer>
    </div>
  )
}

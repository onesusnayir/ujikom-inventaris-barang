import { useEffect, useState } from "react"
import Table from "../components/log/table"
import Report from "../components/log/report"
import Header from "../components/log/header"
import Info from "../components/log/info"

const Log = () => {
    const [ log, setLog ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/log').then(res => res.json()).then(data => setLog(data))
    },[])

    console.log(log)
    return (
        <div className="p-8 bg-gray-50 min-h-screen font-sans">
            <div className="flex justify-between mb-5">
                <div className="flex flex-col">
                    <Header />
                    <Report logs={log}/>
                </div>
                <Info data={log}/>
            </div>
            <Table log={log}/>
        </div>
    )
}

export default Log
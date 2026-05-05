import { useEffect, useState } from "react"
import Table from "../components/log/table"
import Report from "../components/log/report"

const Log = () => {
    const [ log, setLog ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/log').then(res => res.json()).then(data => setLog(data))
    },[])

    return (
        <div className="py-10 flex flex-col gap-10 ">
            <div className="px-5">
                <Report logs={log}/>
            </div>

        <Table log={log}/>
        </div>
    )
}

export default Log
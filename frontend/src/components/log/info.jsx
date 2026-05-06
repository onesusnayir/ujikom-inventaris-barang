const Info = ({data}) => {
    const totalApprove = data.filter(item => item.aksi === "APPROVE").length;
    const totalDecline = data.filter(item => item.aksi === "TOLAK").length;
    const totalData = data.length

    return(
        <div className="text-center flex flex-col gap-1">
            <div className="flex gap-1">
                <div className="flex flex-col card p-3 bg-white shadow-md">
                    <span className="font-bold">
                    Total Approve
                    </span>
                        {totalApprove}
                </div>
                <div className="flex flex-col card p-3 bg-white shadow-md">
                    <span className="font-bold">
                    Total Decline
                        </span>
                        {totalDecline}
                </div>
            </div>
            <div className="flex flex-col card w-full p-3 bg-white shadow-md">
                <span className="font-bold">
                Total Data
                    </span>
                    {totalData}
            </div>
        </div>
    )
}

export default Info
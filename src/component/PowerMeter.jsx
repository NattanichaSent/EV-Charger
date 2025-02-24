function PowerMeter({
    power = 750,
    unit = "kW",
    label = "Current Power Usage",
    description = "Real-time updated",
    icon: Icon = null, // ตั้งค่า default เป็น null (ถ้าไม่ส่ง icon จะไม่แสดง)
    iconColor = "text-blue-500" // ตั้งสีเริ่มต้นเป็นสีน้ำเงิน
}) {
    return (
        <div className='flex flex-col p-4 rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.10)] text-start w-full text-sm space-y-2 hover:bg-bgHover'>
            <p className='font-semibold'>{label}</p>
            <div className='flex w-full justify-between'>
                <div className='flex items-center'>
                    {Icon && <Icon className={`h-6 w-6 mr-2 ${iconColor}`} />} {/* เปลี่ยนสี Icon */}
                    <p className='text-2xl font-bold'>{power}</p>
                </div>
                <p className='flex items-center text-icon'>{unit}</p>
            </div>
            <p className='text-icon'>{description}</p>
        </div>
    )
}

export default PowerMeter

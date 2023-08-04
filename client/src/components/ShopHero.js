import React from 'react'

function ShopHero({location}) {
    return (
        <div>
            <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/shop%20hero.png?alt=media&token=a59bb1cd-852f-48f7-97ee-e248aa78c614&_gl=1*57qmjg*_ga*NDk0NDgyMzE3LjE2NDQ4NzUyMzI.*_ga_CW55HF8NVT*MTY4NjA2NzMyMC41MC4xLjE2ODYwNjgwMzkuMC4wLjA.')] lg:px-[52px] px-5 py-[121px] bg-[length:100%_100%]">
                {location === "shop" ? <p className='font-inter text-xs text-[#605F5F]'>Home {">"} Shop</p> :  <p className='font-inter text-xs text-[#605F5F]'>Home {">"} Shop {">"} Collection</p>}
                {location === "shop" ? <h1 className='font-space font-medium text-[54px] text-[#121212]'>Hair Shop</h1> : <h1 className='font-space font-medium text-[54px] text-[#121212]'>Royal Collection</h1>}
                {location === "shop" ? <p className='font-inter text-lg text-[#3E3E59] lg:w-[45%]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.</p> : <p className='font-inter text-lg text-[#3E3E59] lg:w-[45%]'>This a dummy description of the royal collection at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.</p>}
            </div>
        </div>
    )
}

export default ShopHero
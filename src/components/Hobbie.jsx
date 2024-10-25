import Image from "./Image";
export default function Hobbie() {
  return (
    <section className='hobbies font-lato bg-card rounded-xl  p-5 space-y-5 mt-10 min-[500px]:max-w-[31%] min-[500px]:float-right'>
      <h1 className='text-lg font-franklin'>Hobbies</h1>
      <div className='hobbie-1'>
        <div className='w-full'>
          <Image
            imgUrl={"https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHclp-1JynUWnj9GdlOIvdYHUxD_rBSmk_Q53L_xPrPHOrv9tobzVvkBJCOshIp4P0hDc_3Zus-1ACtLZjGd0GF682Bf46iZQXVIk4hwY1mWsSG_9enpVAi_qNn08Nr-kAT2A.jpg?r=c68https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHclp-1JynUWnj9GdlOIvdYHUxD_rBSmk_Q53L_xPrPHOrv9tobzVvkBJCOshIp4P0hDc_3Zus-1ACtLZjGd0GF682Bf46iZQXVIk4hwY1mWsSG_9enpVAi_qNn08Nr-kAT2A.jpg?r=c68"}
          />
        </div>
        <div className='content text-lightGray pt-2'>
          <h1 className='title text-darkGray font-medium text-lg'>
            Web Serires
          </h1>
        </div>
      </div>
      <div className='hobbie-2'>
        <div className='w-full'>
          <Image
            imgUrl={
              "https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2023/04/20230428_WWE_Universal_Championship_Header--47b5d8e287883f375196089af79f4adf.jpg"
            }
          />
        </div>
        <div className='content text-lightGray pt-2'>
          <h1 className='title text-darkGray font-medium text-lg'>
            WWE
          </h1>
        </div>
      </div>
      <div className='hobbie-3'>
        <div className='w-full'>
          <Image
            imgUrl={
              "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/02/06/Pictures/_24d141fc-48a1-11ea-b9ea-c2a424b98379.jpg"
            }
          />
        </div>
        <div className='content text-lightGray pt-2'>
          <h1 className='title text-darkGray font-medium text-lg'>Music</h1>
        </div>
      </div>
    </section>
  );
}

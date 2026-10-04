import FilterActive from "./filterActive"

export default function FilterOut(){


    return(<>
            <div className="py-5 px-4 md:px-10 flex gap-3 overflow-x-auto flex-nowrap sm:flex-wrap">
                <FilterActive href='/all'>All</FilterActive>
                <FilterActive href='/technology'>Technology</FilterActive>
                <FilterActive href='/design'>Design</FilterActive>
                <FilterActive href='/productivity'>Productivity</FilterActive>
                <FilterActive href='/development'>Development</FilterActive>
                <FilterActive href='/carrier'>Carrier</FilterActive>
                <FilterActive href='/lifestyle'>Lifestyle</FilterActive>
            </div>
    </>)


}
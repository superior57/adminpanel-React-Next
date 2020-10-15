const Item = ({number, title}) => (
  <div className="flex flex-col text-indigo-700 p-2 lg:p-6 w-1/2 lg:w-1/5">
    <div className="text-3xl font-bold">{number}</div>
    <div className="font-sm text-secondary">{title}</div>
  </div>
)

const Options = () => (
  <div className="flex flex-row flex-wrap items-center justify-center uppercase mb-4 text-center">
    <Item number="3" title="Backgrounds" />
    <Item number="4" title="Layouts" />
    <Item number="+100" title="Components" />
    {/*
    <Item number="5" title="Sample apps" />
    */}
    <Item number="2" title="Dashboards" />
    <Item number="7" title="Sidebar options" />
  </div>
)

export default Options

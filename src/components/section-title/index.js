const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="flex flex-col py-4 mb-4">
      <h1 className="text-lg text-default font-bold font-poppins">{title}</h1>
      <h2 className="text-sm text-secondary">{subtitle}</h2>
    </div>
  )
}

export default SectionTitle

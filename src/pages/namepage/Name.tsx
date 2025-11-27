import GridDistortion from "@/components/GridDistortion";
import coverimage from "@/assets/images/cover.webp"

const Name = () => {
  return (
    <div>
      <GridDistortion
        imageSrc={coverimage}
        grid={10}
        mouse={0.1}
        strength={0.30}
        relaxation={0.9}
        className="custom-class"
      />
    </div>
  )
}

export default Name
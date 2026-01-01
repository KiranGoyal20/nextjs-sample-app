import Image from 'next/image';

//Image
import CursorImage from '../../public/cursor2025.png';

const ImagePage = () => {
  return (
    <div>
      <h2>Image Page</h2>
      <Image src={CursorImage} alt="Cursor 2025" width={500} height={300} />
      <br />
      <Image src="/cursor2025.png" alt="Cursor 2025" width={500} height={300} />
      <br />
      <Image src="https://www.pexels.com/photo/a-christmas-tree-6209354" width={500} height={500} />
    </div>
  )
}

export default ImagePage;
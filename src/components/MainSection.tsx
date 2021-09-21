interface HeaderProps {
  content: string;
}

export default function MainSection ({ content }:HeaderProps) {
  return (
          <h2 className='main'>
            { content }
          </h2>
  )
}

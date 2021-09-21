interface HeaderProps {
  title: string;
}

export default function Header ({ title }:HeaderProps) { 
  return (
          <h1 className="header">
            { title }
          </h1>
  )
}

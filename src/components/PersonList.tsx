type PersonListProps = {
    name: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
      <div>
        {  
            props.name.map((item) => (
                <h2>{item.first} - {item.last}</h2>
            ))
        }
      </div>
    )
  }
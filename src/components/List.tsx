import React from 'react'

interface ListProps<Type> {
    // T คือ generic type มันทำให้เราสามารถใช้ได้ทุกชนิด ได้ เช่น string, number  
    items: Type[]
    // render  = function
    render: (item: Type) => React.ReactNode
}
const List = <Type,>({items, render}: ListProps<Type>) => {
  return (
    <div>
        {items.map((item, i) => (
            <div key={i}>{render(item)}</div>
        ))}
    </div>
  )
}

export default List
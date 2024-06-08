import ButtonActionCategory from "./components/actionsCategories/ButtonActionCategory";

const ActionsCategories = ({ categoryAllAction }: { categoryAllAction: (isSelect: boolean) => void; }) => {

  const changeAllCategory = (isSelect: boolean) => {
    categoryAllAction(isSelect)
  }

  return (
    <div className="w-full h-1/6 flex flex-wrap justify-around items-center">
      <ButtonActionCategory text='Elegír todo' changeAllCategory={changeAllCategory} isSelect={true} />
      <ButtonActionCategory text='Quitar todo' changeAllCategory={changeAllCategory} isSelect={false} />
    </div>
  )
}

export default ActionsCategories
import styles from './styles.module.css'

type DefaultInputProps = {
  id: string
  labelText: string
} & React.ComponentProps<'input'>

export const DefaultInput = ({
  id,
  labelText,
  ...props
}: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} {...props} />
    </>
  )
}

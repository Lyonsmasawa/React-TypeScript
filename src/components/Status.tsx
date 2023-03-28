type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let msg
    if (props.status === 'loading') {
        msg = 'Loading ...'
    }
    if (props.status === 'success') {
        msg = 'success ...'
    }
    if (props.status === 'error') {
        msg = 'error...'
    }
  return (
    <div>
        <h2>status - {msg}</h2>
    </div>
  )
}

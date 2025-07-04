import ReactDom from "react-dom"

export default function Modal(props){
    const {children,handleCloseModel} = props
    return ReactDom.createPortal(
        <div className="modal-container">
            <button onClick={handleCloseModel} className='modal-underlay'>
                <div className='modal-content'>
                    {children}
                </div>
            </button>
        </div>,
        document.getElementById('portal')
    )
}
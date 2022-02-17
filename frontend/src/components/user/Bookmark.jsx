import { Button, Modal, Table } from "react-bootstrap";
import Styles from "./Bookmark.module.css"

function Bookmark(props) {

    return(
        <div>
            <Modal
                {...props}
                size="xl"
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
                // scrollable
            >
            <div className={Styles.bigtable}>
                <div className={Styles.createroombg} >
                    <Modal.Header closeButton >
                        <div className={Styles.Sh1} >Bookmark</div>
                    </Modal.Header>
                    <Modal.Body scrollable>
                    <div className={Styles.table}>
                        <Table >
                            <thead className={Styles.tablehead}>
                                <tr>
                                    <th>#</th>
                                    <th>가수</th>
                                    <th>노래 제목</th>
                                </tr>
                            </thead>
                            <tbody className={Styles.tablebody}>
                                <tr>
                                    <th>1</th>
                                    <th>오마이걸</th>
                                    <th>던던 댄스 </th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>종현</th>
                                    <th>02:34</th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>에스파</th>
                                    <th>Next Level</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    </Modal.Body>
                </div>
            </div>
        </Modal>        
        </div>
    )
    
}
export default Bookmark;
import React, {Component} from 'react'
import {Mutation} from 'react-apollo'
import {Modal, Input} from 'antd'

export default class extends Component {
  render() {
    return (
      <Modal
        onCancel={() => this.props.closePostForm()}
        title="Tạo bài đăng mới"
        okText="Đăng"
        okButtonDisabled={true}
        okButtonProps={{
        style: {
          backgroundColor: "#66bb6a",
          width: 4 + 'rem'
        }
      }}
        cancelButtonProps={{
        style: {
          backgroundColor: "#ef5350",
          color: "white",
          width: 4 + 'rem'
        }
      }}
        closable={false}
        cancelText="Hủy"
        visible={this.props.visible}>
        <Mutation>{(createNewPost, {data}) => (
            <div>
              <input
                type="text"
                placeholder="Nhập tiêu đề cho bài viết..."
                className="mb-2 lead p-2 input form-control-plaintext"/>
              <Input.TextArea
                autosize={{
                minRows: 6,
                maxRows: 8
              }}/>
            </div>
          )}</Mutation >
      </Modal>
    )
  }
}
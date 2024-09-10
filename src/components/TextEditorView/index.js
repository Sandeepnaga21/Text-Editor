import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  TxContainer,
  TContainer,
  Container,
  Heading,
  TxImg,
  IContainer,
  Icons,
  BButton,
  IButton,
  UButton,
  Editor,
} from './styledComponents'

class TextEditorView extends Component {
  state = {
    isBoldClicked: false,
    inputText: '',
    isItalicClicked: false,
    isUnderlineClicked: false,
  }

  onClickTextInput = event => this.setState({inputText: event.target.value})

  onClickBoldBtn = () => {
    this.setState(prevState => ({isBoldClicked: !prevState.isBoldClicked}))
  }

  onClickItalicBtn = () => {
    this.setState(prevState => ({isItalicClicked: !prevState.isItalicClicked}))
  }

  onClickUnderlineBtn = () => {
    this.setState(prevState => ({
      isUnderlineClicked: !prevState.isUnderlineClicked,
    }))
  }

  render() {
    const {inputText, isBoldClicked, isItalicClicked, isUnderlineClicked} =
      this.state

    return (
      <TxContainer>
        <TContainer>
          <Container>
            <Heading>Text Editor</Heading>
            <TxImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="tx-img"
            />
          </Container>
          <IContainer>
            <Icons>
              <li>
                <BButton
                  data-testid="bold"
                  type="button"
                  isBoldClicked={isBoldClicked}
                  onClick={this.onClickBoldBtn}
                >
                  <VscBold size={25} />
                </BButton>
              </li>
              <li>
                <IButton
                  data-testid="italic"
                  type="button"
                  onClick={this.onClickItalicBtn}
                  isItalicClicked={isItalicClicked}
                >
                  <GoItalic size={25} />
                </IButton>
              </li>
              <li>
                <UButton
                  data-testid="underline"
                  type="button"
                  onClick={this.onClickUnderlineBtn}
                  isUnderlineClicked={isUnderlineClicked}
                >
                  <AiOutlineUnderline size={25} />
                </UButton>
              </li>
            </Icons>
            <Editor
              type="text"
              onChange={this.onClickTextInput}
              isBoldClicked={isBoldClicked}
              isItalicClicked={isItalicClicked}
              isUnderlineClicked={isUnderlineClicked}
            >
              {inputText}
            </Editor>
          </IContainer>
        </TContainer>
      </TxContainer>
    )
  }
}

export default TextEditorView

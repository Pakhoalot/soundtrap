import React, { Component, MouseEventHandler, EventHandler } from 'react'

type Props = {
  precentage?: number;
  className?: string;
  onChange?: (value: number) => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseMove?: (v: number) => void;
  onMouseUp?: (e: MouseEvent) => void;
  onMouseClick?: (v: number) => void;
}

export default class Slide extends Component<Props> {
  
  private rootRef = React.createRef<HTMLDivElement>();
  private actionTriggerd = false;

  static defaultProps = {
    precentage: 0,
  }
  handleRangeClick: MouseEventHandler = (event) => {
    const { clientX } = event;
    const refDom = this.getRefDom();

    // 如果有了回调函数，先做回调。
    requestAnimationFrame(() => {
      const newPresentage = Math.min(
        Math.max((clientX - refDom.offsetLeft) / refDom.offsetWidth * 100, 0)
        , 100);
      this.props.onMouseClick && this.props.onMouseClick(newPresentage);
      this.onChange(newPresentage);
    })
  }
  /**
   *当handle被按下是，在文档根元素加入两个监听器和处理器，用于监听之后的mousemove 和 mouseup 动作
   *
   * @type {MouseEventHandler}
   * @memberof Slide
   */
  handleMouseDown: MouseEventHandler = (event) => {
    if(!this.actionTriggerd) {
      this.props.onMouseDown && this.props.onMouseDown(event as any);
    }
    this.actionTriggerd = true;
  }
  /**
   *注册到根元素的两个处理器，当鼠标释放后直接释放这两个处理器
   *
   * @memberof Slide
   */
  handleMouseUp = (event: MouseEvent) => {
    if(this.actionTriggerd) {
      this.props.onMouseUp && this.props.onMouseUp(event as any);
    }
    this.actionTriggerd = false;
  }
  /**
   *这是一个native handler 所以在定义时要与React混合事件处理器 MouseEventHandler 区分
   *
   * @memberof Slide
   */
  handleMouseMove = (event: MouseEvent) => {
    if(!this.actionTriggerd) return;
    
    const { clientX } = event;
    const refDom = this.getRefDom();
    requestAnimationFrame(() => {
      const newPresentage = Math.min(
        Math.max((clientX - refDom.offsetLeft) / refDom.offsetWidth * 100, 0)
        , 100);
      
      // 如果有了回调函数，先做回调。
      this.props.onMouseMove && this.props.onMouseMove(newPresentage);
      this.onChange(newPresentage);
    })
  }
  
  onChange = (newPresentage: number) => {
    this.props.onChange && this.props.onChange(newPresentage);
    return;
  }

  getRefDom() {
    const refDom = this.rootRef.current;
    if(!refDom) {
      throw Error('slider root ref not exist');
    }
    return refDom;
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const { precentage, className } = this.props
    return (
      <div className={ `slider ${className || '' }` }
        ref={this.rootRef}
        role="button"
        
        >
        <div className="slider__range"
          onClick={this.handleRangeClick}>
        </div>
        <div className="slider__range slider__range--precentage" style={{
          width: `${precentage}%`,
        }}
        onClick={this.handleRangeClick}></div>
        <div className="slider__handle" style={{
          left: `${precentage}%`
        }}
          onMouseDown={ this.handleMouseDown }
          onClick= {prevent}
          ></div>
      </div>
    )
  }
}

const prevent: MouseEventHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
}
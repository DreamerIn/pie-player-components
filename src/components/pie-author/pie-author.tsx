import { Component, Prop } from '@stencil/core';

/**
 * Pie Author will load a Pie Content model for authoring.
 * It needs to be run in the context 
 */
@Component({
  tag: 'pie-author',
  styleUrl: 'pie-author.css',
  shadow: true
})
export class Author {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return '';
  }

  componentWillLoad(){
    // get item model
    // find out if elements are registered yet for the config pies
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}

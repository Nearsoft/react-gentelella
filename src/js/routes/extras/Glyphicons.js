import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import { XPanel, PageTitle } from '../../components'
import { glyphicons } from './Glyphicons-data.json'

class Glyphicons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelVisible: true,
      search: ''
    }
  }
  
  render () {
    const { panelVisible } = this.state
    const onHide = e => this.setState({panelVisible: !panelVisible})
    const onSearch = search => this.setState({ search })
    const { search } = this.state

    return (
      <div>
        <PageTitle showSearch title="Glyphicons" smallTitle="try the search, it works!" onSearch={onSearch}/>
        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Glyphicons" smallTitle="different icon design elements">
                  <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                  <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <div className="bs-docs-section">
                      <h1 id="glyphicons" className="page-header">Glyphicons</h1>

                      <h2 id="glyphicons-glyphs">Available glyphs</h2>
                      <p>Includes 260 glyphs in font format from the Glyphicon Halflings set. <a href="http://glyphicons.com/">Glyphicons</a> Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost.
                        As a thank you, we only ask that you include a link back to <a href="http://glyphicons.com/">Glyphicons</a> whenever possible.</p>


                      <h2 id="glyphicons-how-to-use">How to use</h2>
                      <p>For performance reasons, all icons require a base class and individual icon class. To use, place the following code just about anywhere. Be sure to leave a space between the icon and text for proper padding.</p>
                      <GIcons search={search} />
                      <div className="bs-callout bs-callout-danger" id="callout-glyphicons-dont-mix">
                        <h4>Don't mix with other components</h4>
                        <p>Icon classes cannot be directly combined with other components. They should not be used along with other classes on the same element. Instead, add a nested <code>&lt;span&gt;</code> and apply the icon classes to the <code>&lt;span&gt;</code>.</p>
                      </div>
                      <div className="bs-callout bs-callout-danger" id="callout-glyphicons-empty-only">
                        <h4>Only for use on empty elements</h4>
                        <p>Icon classes should only be used on elements that contain no text content and have no child elements.</p>
                      </div>
                      <div className="bs-callout bs-callout-info" id="callout-glyphicons-location">
                        <h4>Changing the icon font location</h4>
                        <p>Bootstrap assumes icon font files will be located in the <code>../fonts/</code> directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:</p>
                        <ul>
                          <li>Change the <code>@icon-font-path</code> and/or <code>@icon-font-name</code> variables in the source Less files.</li>
                          <li>Utilize the <a href="http://lesscss.org/usage/#command-line-usage-relative-urls">relative URLs option</a> provided by the Less compiler.</li>
                          <li>Change the <code>url()</code> paths in the compiled CSS.</li>
                        </ul>
                        <p>Use whatever option best suits your specific development setup.</p>
                      </div>
                      <div className="bs-callout bs-callout-warning" id="callout-glyphicons-accessibility">
                        <h4>Accessible icons</h4>
                        <p>Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration),
                          we hide them with the <code>aria-hidden="true"</code> attribute.</p>
                        <p>If you're using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also conveyed to assistive technologies – for instance, include additional content, visually hidden with the <code>.sr-only</code>                        class.</p>
                        <p>If you're creating controls with no other text (such as a <code>&lt;button&gt;</code> that only contains an icon), you should always provide alternative content to identify the purpose of the control, so that it will make sense to
                          users of assistive technologies. In this case, you could add an <code>aria-label</code> attribute on the control itself.</p>
                      </div>
                      <div className="zero-clipboard"><span className="btn-clipboard">Copy</span>
                      </div>
                      <div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"glyphicon glyphicon-search"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span></code></pre>
                      </div>


                      <h2 id="glyphicons-examples">Examples</h2>
                      <p>Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.</p>
                      <div className="bs-example" data-example-id="glyphicons-general">
                        <div className="btn-toolbar" role="toolbar">
                          <div className="btn-group">
                            <button type="button" className="btn btn-default" aria-label="Left Align"><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                            </button>
                            <button type="button" className="btn btn-default" aria-label="Center Align"><span className="glyphicon glyphicon-align-center" aria-hidden="true"></span>
                            </button>
                            <button type="button" className="btn btn-default" aria-label="Right Align"><span className="glyphicon glyphicon-align-right" aria-hidden="true"></span>
                            </button>
                            <button type="button" className="btn btn-default" aria-label="Justify"><span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                            </button>
                          </div>
                        </div>
                        <div className="btn-toolbar" role="toolbar">
                          <button type="button" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star</button>
                          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star</button>
                          <button type="button" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star</button>
                          <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star</button>
                        </div>
                      </div>
                      <div className="zero-clipboard"><span className="btn-clipboard">Copy</span></div>
                      <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">className=</span><span className="s">"btn btn-default"</span> <span className="na">aria-label=</span><span className="s">"Left Align"</span><span className="nt">&gt;</span>
                          <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"glyphicon glyphicon-align-left"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span>
                        <span className="nt">&lt;/button&gt;</span>

                        <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">className=</span><span className="s">"btn btn-default btn-lg"</span><span className="nt">&gt;</span>
                          <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"glyphicon glyphicon-star"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span> Star
                        <span className="nt">&lt;/button&gt;</span></code></pre>
                      </div>

                      <p>An icon used in an <a href="#alerts">alert</a> to convey that it's an error message, with additional <code>.sr-only</code> text to convey this hint to users of assistive technologies.</p>
                      <div className="bs-example" data-example-id="glyphicons-accessibility">
                        <div className="alert alert-danger" role="alert">
                          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                          <span className="sr-only">Error:</span> Enter a valid email address
                        </div>
                      </div>
                      <div className="zero-clipboard"><span className="btn-clipboard">Copy</span>
                      </div>
                      <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-danger"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
                          <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"glyphicon glyphicon-exclamation-sign"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/span&gt;</span>
                          <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"sr-only"</span><span className="nt">&gt;</span>Error:<span className="nt">&lt;/span&gt;</span>
                          Enter a valid email address
                        <span className="nt">&lt;/div&gt;</span></code></pre>
                  </div>
                </div>

              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    )
  }
}

function GIcons ({search}) {
  const gphs = search.length === 0 ? glyphicons : glyphicons.filter(glypicon => glypicon.icon.indexOf(search) !== -1)

  return (
    <div className="bs-glyphicons">
      <ul className="bs-glyphicons-list">
        { gphs.map(glypicon => <Glyphicon key={glypicon.icon} {...glypicon} />) }
      </ul>
    </div>    
  )
}

function Glyphicon ({icon, info}) {
  return (
    <li>
      <span className={`glyphicon glyphicon-${icon}`} aria-hidden="true"></span>
      <span className="glyphicon-class">{info}</span>
    </li>
  )
}

export default Glyphicons
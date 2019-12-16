import React from 'react';

class Docs extends React.Component {
    render() {
      return (
        <div className="container" id="docsContainer">
            <div className="row">
            <div className="col-lg-4">
                    <h1>Github</h1>
                    <div class="list-group">
                    <a href="https://github.com/pakjones/ezlinktrackingFrontEnd" class="list-group-item list-group-item-action list-group-item-info">Front End - React</a>
                        <a href="https://github.com/pakjones/EZLinkTrackingBackEnd" class="list-group-item list-group-item-action list-group-item-secondary">Back End - Express/MongoDB</a>
                    </div>
                </div>

                <div className="col-lg-8">
                    <h1>Routes</h1>
                    <div className="card">
                        <div className="card-header"><h4><kbd>POST</kbd> app.okrana.icu/link</h4></div>
                        <div className="card-body">
                            <div>{"{"}</div>
                            <div className="indent">{'"id": "test",'}</div>
                            <div className="indent">{'"redirect": "ezlinktracking.com"'}</div>
                            <div>{'}'}</div></div>
                        <div className="card-footer">
                            Creates a new link with ID of "test" and a redirect of "ezlinktracking.com".
                        </div>
                    </div>

                    <br />

                    <div className="card">
                        <div className="card-header"><h4><kbd>GET</kbd> app.okrana.icu/link/<span className="text-info">{"{id}"}</span></h4></div>
                        <div className="card-body">
                            {/*<div>{"{}"}</div>*/}
                        </div>
                        <div className="card-footer">
                            Adds a click to the clicks array of link <strong><span className="text-info">{"{id}"}</span></strong> and redirects client to redirect value of link.
                        </div>
                    </div>
                    
                    <br />

                    <div className="card">
                        <div className="card-header"><h4><kbd>GET</kbd> app.okrana.icu/stats/<span className="text-info">{"{id}"}</span></h4></div>
                        <div className="card-body">
                            {/*<div>{"{}"}</div>*/}
                        </div>
                        <div className="card-footer">
                            Responds with an array of the clicks from link <strong><span className="text-info">{"{id}"}</span></strong> with timestamps.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  }

  export default Docs;
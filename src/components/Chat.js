import React from 'react'

export const Chat = () => {
  return (
    <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-md-4">
             
              <div class="box box-warning direct-chat direct-chat-warning">
                <div class="box-header with-border">
                  <h3 class="box-title">Chat Messages</h3>

                  <div class="box-tools pull-right">
                    <span data-toggle="tooltip" title="" class="badge bg-yellow" data-original-title="3 New Messages"></span>
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="" data-widget="chat-pane-toggle" data-original-title="Contacts">
                      <i class="fa fa-comments"></i></button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
                    </button>
                  </div>
                </div>
              
                <div class="box-body">
                  
                  <div class="direct-chat-messages">
                
                    <div class="direct-chat-msg">
                      <div class="direct-chat-info clearfix">
                      </div>
                      <div class="direct-chat-text">
                      </div>
                    </div>
                    
                    <div class="direct-chat-msg right">
                      <div class="direct-chat-info clearfix">
                      </div>
                      <div class="direct-chat-text">
                      </div>
                    </div>
                  </div>
                </div>
               
                <div class="box-footer">
                  <form action="#" method="post">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type Message ..." class="form-control"/>
                      <span class="input-group-btn">
                            <button type="button" class="btn btn-warning btn-flat">Send</button>
                          </span>
                    </div>
                  </form>
                </div>
             
              </div>
           
            </div>
             </div>
            
              </div>
             
            </div>
  )
}


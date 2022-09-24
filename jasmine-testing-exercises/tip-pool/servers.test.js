describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should handle an empty input', function(){
    serverNameInput.value = ''
    submitServerInfo()

    expect(Object.keys(allServers).length).toEqual(0)
    expect(JSON.stringify(Object.keys(allServers))).toEqual('[]')
  })

  it('update ServerTable', function(){
    submitServerInfo()
    updateServerTable()

    let myTDlist = document.querySelectorAll('#serverTable tbody tr td')

    expect(myTDlist[0].innerText).toEqual('Alice')
    expect(myTDlist[1].innerText).toEqual('$0.00')
  })

  afterEach(function() {
    serverId = 0
    serverTbody.innerHTML = ''
    allServers = {}
  });
});

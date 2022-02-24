describe('timeout bug', function() {
  this.timeout(5000)
  
  it(`disables timeouts when run with --timeout 0`, async function() {
    // this is just so you can test this without a specific IDE, by running with `--timeout 0` from the CLI
    // you could also replace this line with a console.log, place a breakpoint in your IDE, wait 6 seconds and resume,
    // and it would also reproduce the bug
    await new Promise(resolve => setTimeout(resolve, 6000))
    console.log('this should print and there should be no timeout error')
  })
})

{
  "name":"jsonnet",
  "env":import "default/env.jsonnet",
  "fullName":self.name + "-" + self.env.version
}

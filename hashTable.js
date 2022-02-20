class HashTable {
  constructor(size) {
    this.values = {}
    this.size = size
  }

  add(key, value) {
    const hash = this.generateHash(key)

    if (!this.values.hasOwnProperty(hash)) 
      this.values[hash] = {}
    
    this.values[hash][key] = value  
  }

  remove(key) {
    const hash = this.generateHash(key)

    // looks if key exists in the hash table
    if(this.values.hasOwnProperty(hash) && 
        this.values[hash].hasOwnProperty(key))
          delete this.values[hash][key]
  }

  generateHash(key) {
    let keyStr = key.toString()
    let sum = 0

    // sum up all ascii chars 
    for(let i = 0; i < keyStr.length; i++) 
      sum += keyStr.charCodeAt(i)
    
    return sum % this.size
  }
  printAll() {
    for(const hash in this.values) {
      for(const key in this.values[hash]) {
        console.log("{", key, ", ", this.values[hash][key], "}")
      }
    }
  }
}

(function test(){

  const log = console.log
  
  /******************************************************** */
  // Test 1 - it should return a value from 0 to 4
  
  let hashTable = new HashTable(5)
  //log(hashTable.generateHash("key1")) // 3 -> 378 % 5
  // size will always be 5..
  
  /******************************************************** */
  // Test 2 - it should add new key/value-pairs in the table

  hashTable.add("key1", "value1")
  hashTable.add("key2", "value2")
  hashTable.add("key3", "value3")
  hashTable.add("key4", "value4")
  hashTable.add("key5", "value5")
  hashTable.add("key6", "value6")
  hashTable.add("key7", "value7")
  hashTable.add("key8", "value8")
  hashTable.add("key9", "value9")
  hashTable.add("key10", "value10")
  //hashTable.printAll() 
  // { key3 ,  value3 }
  // { key8 ,  value8 }
  // { key4 ,  value4 }
  // { key9 ,  value9 }
  // { key10 ,  value10 }
  // { key5 ,  value5 }
  // { key1 ,  value1 }
  // { key6 ,  value6 }
  // { key2 ,  value2 }
  // { key7 ,  value7 }

  log(hashTable.values)
  /*
  {
    '0': { key3: 'value3', key8: 'value8' },
    '1': { key4: 'value4', key9: 'value9', key10: 'value10' },
    '2': { key5: 'value5' },
    '3': { key1: 'value1', key6: 'value6' },
    '4': { key2: 'value2', key7: 'value7' }
  }

  => proves that the size will be 5

  */

  /******************************************************** */
  // Test 3 - it should remove a key/value pair with given key

  log("Removing key2")
  hashTable.remove("key2")
  // hashTable.printAll()
  // Removing key2
  // { key3 ,  value3 }
  // { key8 ,  value8 }
  // { key4 ,  value4 }
  // { key9 ,  value9 }
  // { key10 ,  value10 }
  // { key5 ,  value5 }
  // { key1 ,  value1 }
  // { key6 ,  value6 }
  // { key7 ,  value7 }
  log(hashTable.values)
  // Removing key2
  // {
  //   '0': { key3: 'value3', key8: 'value8' },
  //   '1': { key4: 'value4', key9: 'value9', key10: 'value10' },
  //   '2': { key5: 'value5' },
  //   '3': { key1: 'value1', key6: 'value6' },
  //   '4': { key7: 'value7' }
  // }

  
})()
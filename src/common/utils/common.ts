//获取文件名
export function getFileName(fileName: string): string {
  return fileName.substring(0, fileName.lastIndexOf('.'))
}

//获取文件后缀名
export function getFileExt(fileName: string): string {
  if (getFileName(fileName)) {
    return fileName.substring(fileName.lastIndexOf('.') + 1)
  }
  return ''
}
//根据当前key获取Map上一个key
export function getPrevKey(map: Map<string, any>, key: string): string {
  const keys = Array.from(map.keys())
  const index = keys.findIndex((value) => value === key)
  if (index > 0) {
    return keys[index - 1]
  }
  return ''
}
//根据当前key获取Map下一个key
export function getNextKey(map: Map<string, any>, key: string): string {
  const keys = Array.from(map.keys())
  const index = keys.findIndex((value) => value === key)
  if (index < keys.length - 1) {
    return keys[index + 1]
  }
  return ''
}
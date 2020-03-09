# usage: emoji.sh {emoji alias} {emoji image's URL} {file name}

cd ./priv/static/emoji/custom

$emojialias = $1
$itemURL = $2
$filename = $3

wget $itemURL --output $filename
emojiconfig = "${emojialias}, /emoji/custom/${filename}"
echo $emojiconfig >> /opt/pleroma/config/emoji.txt
function hasCollided(Lbullet,Lwall)
{
//bulletRightEdge = Lbullet.x + Lbullet.width
if (Lwall.x-Lbullet.x< Lbullet.width/2+Lwall.width/2){
        return true
    }
    return false
}
r = []
s = ' '

before = open('before.txt', 'r', encoding='UTF-8')
t = before.read()

for i in range(0, int(len(t)/64)+1, 1) :
    r.append(t[64*i:64*(i+1)])

    if i < int(len(t)/64):

        for j in range (0, 64, 1) :
            l = 0

            for k in range (0, len(s), 1):

                if r[i][j] == s[k]:
                    l += 1

            if l == 0:
                s += r[i][j]
    else:
        
        for j in range (0, len(t)%64, 1) :
            l = 0

            for k in range (0, len(s), 1):

                if r[i][j] == s[k]:
                    l += 1

            if l == 0:
                s += r[i][j]

s = s[1:len(s)]
result = open("result.txt","w",encoding='UTF-8')
result.write(s)
result.close()
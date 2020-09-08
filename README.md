# Simon The Game

## Правила игры  
- Игровое поле состоят из 4 квадратов / кнопок, каждый из которых производит определенный тон и «загорается» при нажатии. 
- Раунд в игре состоит из устройства, освещающего одну или несколько кнопок в случайном порядке. После чего игрок должен воспроизвести этот порядок, нажимая кнопки.
- Если игрок успешно воспроизводит последовательность, то они переходят к следующему раунду.
- Если игрок не воспроизводит последовательность, то игра окончена (уведомление должно отображаться для пользователя).
- С каждым раундом количество кнопок (последовательность) увеличивается.  
## Функциональность
- При воспроизведении последовательности кнопки / квадрат должны «загореться».
- Каждая кнопка / квадрат должны издавать уникальный звук во время игры
## Уровни сложности
- Легкий: время между каждой кнопкой в последовательности должно быть 1,5 сек
- Средний: время между каждой кнопкой в последовательности должно быть 1,0 сек.
- Сложный: время между каждой кнопкой в последовательности должно быть 0,4 сек.  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

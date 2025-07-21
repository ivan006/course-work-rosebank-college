package com.example.a3_2_1_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val targetNumber = Random.nextInt(1, 101)
        var guessCount = 0
        val maxGuesses = 5

        val submitButton = findViewById<Button>(R.id.submitButton)
        val numberInput = findViewById<EditText>(R.id.numberInput)
        val resultOutput = findViewById<TextView>(R.id.resultOutput)

        submitButton.setOnClickListener {
            val userInput = numberInput.text.toString()
            if (userInput.isEmpty()) {
                resultOutput.text = "Please enter a number"
                return@setOnClickListener
            }

            val guessedNumber = userInput.toInt()
            guessCount++

            if (guessCount > maxGuesses) {
                resultOutput.text = "Game over! You’ve used all your guesses. The number was $targetNumber"
                return@setOnClickListener
            }

            if (guessedNumber == targetNumber) {
                resultOutput.text = "Correct! You guessed it in $guessCount tries!"
            } else if (guessedNumber < targetNumber) {
                resultOutput.text = "Too low! Guesses used: $guessCount/$maxGuesses"
            } else {
                resultOutput.text = "Too high! Guesses used: $guessCount/$maxGuesses"
            }
        }
    }
}
